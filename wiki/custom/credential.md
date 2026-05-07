---
logical: "credential"
display: "Credenziali"
entitySetName: "credentials"
primaryId: "credentialid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Credenziali

## Identity

| Property | Value |
| --- | --- |
| Logical name | `credential` |
| Display name | Credenziali |
| Display (plural) | Credenziali |
| Schema name | `credential` |
| Entity set (Web API) | `credentials` |
| Primary id attribute | `credentialid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/credentials?$select=name&$top=10
GET /api/data/v9.2/credentials(<guid>)
POST /api/data/v9.2/credentials
PATCH /api/data/v9.2/credentials(<guid>)
DELETE /api/data/v9.2/credentials(<guid>)
```

## Attributes

Writable: **26** · Read-only: **16**

### Writable

`certificate`, `connectionreference`, `connectiontype`, `credentialid`, `credentials`, `credentialtype`, `cyberarkapplicationid`, `cyberarkobject`, `cyberarksafe`, `cyberarkusername`, `defaultcredential`, `description`, `groupmapping`, `importsequencenumber`, `iscustomizable`, `logincontext`, `name`, `overriddencreatedon`, `ownerid`, `password`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `usagetype`, `username`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_credential_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_credential_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_credential_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_credential_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_credential` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_credential` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_credential` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_credential` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `credential_connectionreference` | [connectionreference](connectionreference.md) | `connectionreference` | `connectionreference` |
| `environmentvariabledefinition_credential_password` | [environmentvariabledefinition](environmentvariabledefinition.md) | `password` | `password` |
| `environmentvariabledefinition_credential_username` | [environmentvariabledefinition](environmentvariabledefinition.md) | `username` | `username` |
| `environmentvariabledefinition_credential_cyberarksafe` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarksafe` | `cyberarksafe` |
| `environmentvariabledefinition_credential_cyberarkobject` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkobject` | `cyberarkobject` |
| `environmentvariabledefinition_credential_cyberarkusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkusername` | `cyberarkusername` |
| `environmentvariabledefinition_credential_certificate` | [environmentvariabledefinition](environmentvariabledefinition.md) | `certificate` | `certificate` |
| `credential_credential_defaultcredential` | [credential](credential.md) | `defaultcredential` | `defaultcredential` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `credential_SyncErrors` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `credential_DuplicateMatchingRecord` | [credential](credential.md) | `duplicaterecordid` | `duplicaterecordid_credential` |
| `credential_DuplicateBaseRecord` | [credential](credential.md) | `baserecordid` | `baserecordid_credential` |
| `credential_AsyncOperations` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `credential_MailboxTrackingFolders` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `credential_UserEntityInstanceDatas` | [credential](credential.md) | `objectid` | `objectid_credential` |
| `credential_ProcessSession` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `credential_BulkDeleteFailures` | [credential](credential.md) | `regardingobjectid` | `regardingobjectid_credential` |
| `credential_PrincipalObjectAttributeAccesses` | [credential](credential.md) | `objectid` | `objectid_credential` |
| `credential_flowmachinenetwork` | [credential](credential.md) | `credentialid` | `CredentialId` |
| `credential_credential_defaultcredential` | [credential](credential.md) | `defaultcredential` | `defaultcredential` |
| `connectioninstance_CredentialId_credential` | [credential](credential.md) | `credentialid` | `CredentialId` |


## Source

Generated from [credential (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='credential')) on 2026-05-07.