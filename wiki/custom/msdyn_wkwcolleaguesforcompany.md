---
logical: "msdyn_wkwcolleaguesforcompany"
display: "wkwcolleaguesforcompany"
entitySetName: "msdyn_wkwcolleaguesforcompanies"
primaryId: "msdyn_wkwcolleaguesforcompanyid"
primaryName: "msdyn_introducer_emailaddress"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `msdyn_introduced_entity_id`, `msdyn_introducer_emailaddress`, `msdyn_introducer_systemuserid`, `msdyn_last_interaction_dataflow`, `msdyn_last_interaction_datetime`, `msdyn_last_interaction_type`, `msdyn_score`, `msdyn_wkwcolleaguesforcompanyid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

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

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wkwcolleaguesforcompany_SyncErrors` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_DuplicateMatchingRecord` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_DuplicateBaseRecord` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `baserecordid` | `baserecordid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_AsyncOperations` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_MailboxTrackingFolders` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_UserEntityInstanceDatas` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `objectid` | `objectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_ProcessSession` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_BulkDeleteFailures` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwcolleaguesforcompany` |
| `msdyn_wkwcolleaguesforcompany_PrincipalObjectAttributeAccesses` | [msdyn_wkwcolleaguesforcompany](msdyn_wkwcolleaguesforcompany.md) | `objectid` | `objectid_msdyn_wkwcolleaguesforcompany` |


## Source

Generated from [msdyn_wkwcolleaguesforcompany (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wkwcolleaguesforcompany')) on 2026-05-07.