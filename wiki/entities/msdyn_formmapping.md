---
logical: "msdyn_formmapping"
display: "Form Mapping"
entitySetName: "msdyn_formmappings"
primaryId: "msdyn_formmappingid"
primaryName: "msdyn_formname"
tableType: "Standard"
ownership: "UserOwned"
---

# Form Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_formmapping` |
| Display name | Form Mapping |
| Display (plural) | Form Mappings |
| Schema name | `msdyn_FormMapping` |
| Entity set (Web API) | `msdyn_formmappings` |
| Primary id attribute | `msdyn_formmappingid` |
| Primary name attribute | `msdyn_formname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_formmappings?$select=msdyn_formname&$top=10
GET /api/data/v9.2/msdyn_formmappings(<guid>)
POST /api/data/v9.2/msdyn_formmappings
PATCH /api/data/v9.2/msdyn_formmappings(<guid>)
DELETE /api/data/v9.2/msdyn_formmappings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`AllowedOperations`, `BaseEntity`, `CardId`, `CustomApiId`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_Context`, `msdyn_FormMappingId`, `msdyn_formname`, `msdyn_RequestedColumns`, `Operation`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_formmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_formmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_formmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_formmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_formmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_formmapping_cardid` | [card](card.md) | `cardid` | `cardid` |
| `msdyn_formmapping_customapiid` | [customapi](customapi.md) | `customapiid` | `customapiid` |
| `owner_msdyn_formmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_formmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_formmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_formmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_formmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_formmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_formmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_formmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_formmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_formmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_formmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_formmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_formmapping.md) on 2026-05-06.