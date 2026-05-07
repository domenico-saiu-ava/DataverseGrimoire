---
logical: "msdyn_similarentitiesfeatureimportance"
display: "Similar entities feature importance"
entitySetName: "msdyn_similarentitiesfeatureimportances"
primaryId: "msdyn_similarentitiesfeatureimportanceid"
primaryName: "msdyn_entitytype"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Similar entities feature importance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_similarentitiesfeatureimportance` |
| Display name | Similar entities feature importance |
| Display (plural) | msdyn_similarentitiesfeatureimportances |
| Schema name | `msdyn_similarentitiesfeatureimportance` |
| Entity set (Web API) | `msdyn_similarentitiesfeatureimportances` |
| Primary id attribute | `msdyn_similarentitiesfeatureimportanceid` |
| Primary name attribute | `msdyn_entitytype` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_similarentitiesfeatureimportances?$select=msdyn_entitytype&$top=10
GET /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
POST /api/data/v9.2/msdyn_similarentitiesfeatureimportances
PATCH /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
DELETE /api/data/v9.2/msdyn_similarentitiesfeatureimportances(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_entitytype`, `msdyn_featureimportance`, `msdyn_similarentitiesfeatureimportanceId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_similarentitiesfeatureimportance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_similarentitiesfeatureimportance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_similarentitiesfeatureimportance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_similarentitiesfeatureimportance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_similarentitiesfeatureimportance` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_similarentitiesfeatureimportance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_similarentitiesfeatureimportance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_similarentitiesfeatureimportance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_similarentitiesfeatureimportance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_similarentitiesfeatureimportance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_similarentitiesfeatureimportance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_similarentitiesfeatureimportance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_similarentitiesfeatureimportance.md) on 2026-05-06.