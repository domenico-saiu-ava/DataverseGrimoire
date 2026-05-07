---
logical: "msdyn_productivityactioninputparameter"
display: "Action Input Parameter"
entitySetName: "msdyn_productivityactioninputparameters"
primaryId: "msdyn_productivityactioninputparameterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Input Parameter

Attributes of action input parameters

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityactioninputparameter` |
| Display name | Action Input Parameter |
| Display (plural) | Action Input Parameters |
| Schema name | `msdyn_productivityactioninputparameter` |
| Entity set (Web API) | `msdyn_productivityactioninputparameters` |
| Primary id attribute | `msdyn_productivityactioninputparameterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityactioninputparameters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
POST /api/data/v9.2/msdyn_productivityactioninputparameters
PATCH /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
DELETE /api/data/v9.2/msdyn_productivityactioninputparameters(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actiontemplateinputparameterid`, `msdyn_name`, `msdyn_parametertype`, `msdyn_productivityactioninputparameterId`, `msdyn_UniqueName`, `msdyn_visibility`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivityactioninputparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivityactioninputparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityactioninputparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityactioninputparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityactioninputparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actioninput` | [msdyn_productivitymacroactiontemplate](msdyn_productivitymacroactiontemplate.md) | `msdyn_actiontemplateinputparameterid` | `msdyn_actiontemplateinputparameterid` |
| `owner_msdyn_productivityactioninputparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivityactioninputparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivityactioninputparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityactioninputparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactioninputparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactioninputparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivityactioninputparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivityactioninputparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivityactioninputparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivityactioninputparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actioninputparameter_msdyn_par` | [msdyn_productivityactioninputparameterid](msdyn_productivityactioninputparameterid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_productivityactioninputparameter.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivityactioninputparameter.md) on 2026-05-06.