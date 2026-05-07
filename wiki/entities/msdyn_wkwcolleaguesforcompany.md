---
logical: "msdyn_wkwcolleaguesforcompany"
display: "wkwcolleaguesforcompany"
entitySetName: "msdyn_wkwcolleaguesforcompanies"
primaryId: "msdyn_wkwcolleaguesforcompanyid"
primaryName: "msdyn_introducer_emailaddress"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# wkwcolleaguesforcompany

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wkwcolleaguesforcompany` |
| Display name | wkwcolleaguesforcompany |
| Display (plural) | wkwcolleaguesforcompanies |
| Schema name | `msdyn_wkwcolleaguesforcompany` |
| Entity set (Web API) | `msdyn_wkwcolleaguesforcompanies` |
| Primary id attribute | `msdyn_wkwcolleaguesforcompanyid` |
| Primary name attribute | `msdyn_introducer_emailaddress` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wkwcolleaguesforcompanies?$select=msdyn_introducer_emailaddress&$top=10
GET /api/data/v9.2/msdyn_wkwcolleaguesforcompanies(<guid>)
POST /api/data/v9.2/msdyn_wkwcolleaguesforcompanies
PATCH /api/data/v9.2/msdyn_wkwcolleaguesforcompanies(<guid>)
DELETE /api/data/v9.2/msdyn_wkwcolleaguesforcompanies(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_introduced_entity_id`, `msdyn_introducer_emailaddress`, `msdyn_introducer_systemuserid`, `msdyn_last_interaction_dataflow`, `msdyn_last_interaction_datetime`, `msdyn_last_interaction_type`, `msdyn_score`, `msdyn_wkwcolleaguesforcompanyId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wkwcolleaguesforcompany_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wkwcolleaguesforcompany_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wkwcolleaguesforcompany_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wkwcolleaguesforcompany_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_wkwcolleaguesforcompany` | [organization](organization.md) | `organizationid` | `organizationid` |
| `systemuser_msdyn_wkwcolleaguesforcompany_introducer_systemuserid` | [systemuser](systemuser.md) | `msdyn_introducer_systemuserid` | `msdyn_introducer_systemuserid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wkwcolleaguesforcompany_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwcolleaguesforcompany_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_wkwcolleaguesforcompany.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_wkwcolleaguesforcompany.md) on 2026-05-06.