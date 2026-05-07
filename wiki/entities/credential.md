---
logical: "credential"
display: "Credential"
entitySetName: "credentials"
primaryId: "credentialid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Credential

## Identity

| Property | Value |
| --- | --- |
| Logical name | `credential` |
| Display name | Credential |
| Display (plural) | Credentials |
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

Writable: **27** · Read-only: **18**

### Writable

`certificate`, `connectionreference`, `connectiontype`, `credentialId`, `credentials`, `credentialtype`, `cyberarkapplicationid`, `cyberarkobject`, `cyberarksafe`, `cyberarkusername`, `defaultcredential`, `description`, `groupmapping`, `ImportSequenceNumber`, `IsCustomizable`, `logincontext`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `password`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `usagetype`, `username`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_credential` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `credential_connectionreference` | [connectionreference](connectionreference.md) | `connectionreference` | `connectionreference` |
| `credential_credential_defaultcredential` | [credential](credential.md) | `defaultcredential` | `defaultcredential` |
| `environmentvariabledefinition_credential_certificate` | [environmentvariabledefinition](environmentvariabledefinition.md) | `certificate` | `certificate` |
| `environmentvariabledefinition_credential_cyberarkobject` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkobject` | `cyberarkobject` |
| `environmentvariabledefinition_credential_cyberarksafe` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarksafe` | `cyberarksafe` |
| `environmentvariabledefinition_credential_cyberarkusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkusername` | `cyberarkusername` |
| `environmentvariabledefinition_credential_password` | [environmentvariabledefinition](environmentvariabledefinition.md) | `password` | `password` |
| `environmentvariabledefinition_credential_username` | [environmentvariabledefinition](environmentvariabledefinition.md) | `username` | `username` |
| `lk_credential_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_credential_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_credential_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_credential_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_credential` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_credential` | [team](team.md) | `owningteam` | `owningteam` |
| `user_credential` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connectioninstance_CredentialId_credential` | _n/a_ | `credentialid` | _n/a_ |
| `credential_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `credential_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `credential_credential_defaultcredential` | _n/a_ | `defaultcredential` | _n/a_ |
| `credential_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `credential_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `credential_flowmachinenetwork` | _n/a_ | `credentialid` | _n/a_ |
| `credential_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `credential_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `credential_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `credential_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [credential.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/credential.md) on 2026-05-06.