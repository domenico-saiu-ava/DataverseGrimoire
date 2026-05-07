---
logical: "msdyn_productivityactionoutputparameter"
display: "Action Output Parameter"
entitySetName: "msdyn_productivityactionoutputparameters"
primaryId: "msdyn_productivityactionoutputparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Output Parameter

Attributes of action output parameters

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityactionoutputparameter` |
| Display name | Action Output Parameter |
| Display (plural) | Action Output Parameters |
| Schema name | `msdyn_productivityactionoutputparameter` |
| Entity set (Web API) | `msdyn_productivityactionoutputparameters` |
| Primary id attribute | `msdyn_productivityactionoutputparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityactionoutputparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
POST /api/data/v9.2/msdyn_productivityactionoutputparameters
PATCH /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
DELETE /api/data/v9.2/msdyn_productivityactionoutputparameters(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actiontemplateoutputparameterid`, `msdyn_name`, `msdyn_productivityactionoutputparameterId`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivityactionoutputparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivityactionoutputparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityactionoutputparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityactionoutputparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityactionoutputparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actionout` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateoutputparameterid` | `msdyn_actiontemplateoutputparameterid` |
| `owner_msdyn_productivityactionoutputparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivityactionoutputparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivityactionoutputparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityactionoutputparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactionoutputparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` | [msdyn_productivityactionoutputparameterid](msdyn_productivityactionoutputparameterid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_productivityactionoutputparameter.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivityactionoutputparameter.md) on 2026-05-06.